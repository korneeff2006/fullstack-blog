const card = (post) => {
    return `<div class="card z-depth-4"> 
    <div class="card-content">
            
        <span class="card-title"> ${post.title} </span>
        <p> ${post.text} </p>
        <small> ${post.date} </small>
    </div>
    <div class="card-action">
        <button class="btn btn-small pink">
            <i class="material-icons">delete</i>
        </button>        
    </div>
</div>
`
}

const posts = []
const BASE_URL = 'api/post'

class PostApi {
    static fetch() {
        return fetch(BASE_URL, { method : 'GET'}).then((res) => {
            res.json()
        })


    }
}

document.addEventListener('DOMContentLoaded' , () => {
    PostApi.fetch().then((backendPosts) => {
        
    })
})