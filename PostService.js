import Post from './Post.js'
import fileService from "./fileService.js"

const create = async (post, picture) => {
    const fileName = fileService.saveFile(picture)
    const createdPost = await Post.create({...post, picture: fileName})
    return createdPost
}

const getAll = async () => {
    const posts = await Post.find()
    return posts
}

const getOne = async (id) => {
    if (!id) {
        throw new Error('ID undefined')
    }
    const post = await Post.findById(id)
    return post
}

const update = async (post) => {
    if (!post._id) {
        throw new Error('ID undefined')
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
    return updatedPost
}

const deletePost = async (id) => {
    if (!id) {
        throw new Error('ID undefined')
    }
    const post = await Post.findByIdAndDelete(id)
    return post
}

export default {create, getAll, getOne, update, deletePost}