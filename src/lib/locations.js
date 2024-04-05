import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const locationsDirectory = path.join(process.cwd(), 'src/data/locations')

export function getSortedLocationsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(locationsDirectory)
  const allData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(locationsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getFeaturedLocationsData(ids) {
  
  // Get file names under /posts
  const fileNames = fs.readdirSync(locationsDirectory)
  const allData = []
  fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(locationsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    if ( ids.includes(id) ) {
      // Combine the data with the id
      allData.push({
        id,
        ...matterResult.data
      });
    }
  })

  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getRelatedLocations(current_id) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(locationsDirectory)
  const allData = [];

  fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(locationsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Exclude current id from result

    if ( id != current_id ) {
      // Combine the data with the id
      allData.push({
        id,
        ...matterResult.data
      });
    }
  })

  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.category > b.category) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllLocationsIds() {
  const fileNames = fs.readdirSync(locationsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getLocationData(id) {
  const fullPath = path.join(locationsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}