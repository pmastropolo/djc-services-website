import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

export default function handler(req, res) {
  const { category } = req.query;

  // Read posts data from the filesystem
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    };
  });

  // Filter posts by category
  const postsInCategory = posts.filter(post => {
    return post.category === category;
  });

  // Send the filtered posts as response
  res.status(200).json(postsInCategory);
}