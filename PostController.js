import PostService from './PostService.js'

const create = async (req, res) => {
    try {
        console.log(req.files.picture)
        const post = await PostService.create(req.body, req.files.picture)
        return res.json(post)
    } catch (e) {
        res.status(500).json(e)
    }
}

const getAll = async (req, res) => {
    try {
        const posts = await PostService.getAll()
        return res.json(posts)
    } catch (e) {
        res.status(500).json(e)
    }
}

const getOne = async (req, res) => {
    try {
        const post = await PostService.getOne(req.params.id)
        return res.json(post)
    } catch (e) {
        res.status(500).json(e.message)
    }
}

const update = async (req, res) => {
    try {
        const updatedPost = await PostService.update(req.body)
        return res.json(updatedPost)
    } catch (e) {
        res.status(500).json(e.message)
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await PostService.deletePost(req.params.id)
        return res.json(post)
    } catch (e) {
        res.status(500).json(e)
    }
}

export default { create, getAll, getOne, update, deletePost }