
const newFormHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('#post-name').value.trim();
  const description = document.querySelector('#post-desc').value.trim();

console.log(description)
  if (post_title &&  description) {
    console.log("in here")
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ post_title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
      console.log("went thruu")
    } else {
      alert('Failed to create post');
    }
  }
};

const formbuttonctrl = async (event) =>{

var insert = document.querySelector("#insert");
insert.innerHTML+=
'<div class="col-md-6"> <h3>Create a New Post:</h3>  <form class="form new-post-form"> <div class="form-group"> <label for="post-name">Post Title:</label> <input class="form-input" type="text" id="post-name" name="post-name" /> </div> <div class="form-group"> <label for="post-desc">description:</label> <textarea class="form-input" id="post-desc" name="post-desc"></textarea> </div> <div class="form-group"> <button type="submit" class="btn btn-primary">Create</button>  </div> </form> </div>'

  document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
  
}


const delButtonHandler = async (event) => {
  console.log("in the del")
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
console.log(response)
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
.querySelector('#askbtn')
.addEventListener('click', formbuttonctrl);
document.querySelector('#postie').addEventListener('click', delButtonHandler);
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);


