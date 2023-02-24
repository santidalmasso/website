// import { Projects } from "../lib/constants";
// import Pageres from "pageres";
import {join} from 'path'
import fs from 'fs'
import {promisify} from 'util'

const readdir = promisify(fs.readdir)
const unlink = promisify(fs.unlink)

async function savePreviewImages() {
  const dir = join(__dirname, '../public/previews')
  try {
    const files = await readdir(dir)
    const removeFiles = files.map(file => unlink(join(dir, file)))
    await Promise.all(removeFiles)

    // const promises = Projects.map(({ url }) =>
    //   new Pageres({ delay: 4, filename: "<%= url %>" })
    //     .src(url, ["1024x768"], { crop: true })
    //     .dest(dir)
    //     .run()
    // );
    // await Promise.all(promises);
  } catch (err) {
    console.error(err)
    throw new Error('Error loading preview images')
  }
}

savePreviewImages().then(() => console.log('Images created'))
