import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = path.join(process.cwd(), 'assets', 'images-source')
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'images')

const SUPPORTED_EXTENSIONS = new Set([
    '.png',
    '.jpg',
    '.jpeg',
    '.webp',
])

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true })
}

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true })

    const files = await Promise.all(
        entries.map(async (entry) => {
            const fullPath = path.join(dir, entry.name)

            if (entry.isDirectory()) {
                return walk(fullPath)
            }

            return fullPath
        }),
    )

    return files.flat()
}

function getOutputPath(inputPath) {
    const relativePath = path.relative(SOURCE_DIR, inputPath)
    const parsed = path.parse(relativePath)

    return path.join(
        OUTPUT_DIR,
        parsed.dir,
        `${parsed.name}.webp`,
    )
}

async function optimizeImage(inputPath) {
    const ext = path.extname(inputPath).toLowerCase()

    if (!SUPPORTED_EXTENSIONS.has(ext)) {
        return
    }

    const outputPath = getOutputPath(inputPath)
    await ensureDir(path.dirname(outputPath))

    await sharp(inputPath)
        .rotate()
        .resize({
            width: 1920,
            height: 1080,
            fit: 'inside',
            withoutEnlargement: true,
        })
        .webp({
            quality: 82,
            effort: 6,
        })
        .toFile(outputPath)

    const inputStat = await fs.stat(inputPath)
    const outputStat = await fs.stat(outputPath)

    const inputKb = Math.round(inputStat.size / 1024)
    const outputKb = Math.round(outputStat.size / 1024)

    console.log(
        `${path.relative(process.cwd(), inputPath)} -> ${path.relative(process.cwd(), outputPath)} (${inputKb}KB -> ${outputKb}KB)`,
    )
}

async function main() {
    try {
        await fs.access(SOURCE_DIR)
    }
    catch {
        console.error(`Source directory does not exist: ${SOURCE_DIR}`)
        process.exit(1)
    }

    const files = await walk(SOURCE_DIR)

    await Promise.all(files.map(optimizeImage))

    console.log('Image optimization complete.')
}

main()