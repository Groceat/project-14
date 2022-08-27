

const newFormHandler = async (event) => {
    event.preventDefault();
    const description = document.querySelector('#post-desc').value.trim();
  const post_id= document.querySelector('.new-post-form').getAttribute("dataid")
    if (description) {
        console.log(description);
        console.log(post_id);
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ description, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
        console.log("went thruu")
      } else {
        alert('Failed to create comment');
      }
    }
  };

const formbuttoncomment = async (event) =>{
    if (event.target.hasAttribute('dataid')) {
       var insert = event.target
       ins2 = event.target.getAttribute("dataid")
    insert.innerHTML+='<form dataid='+ins2+' class="form new-post-form"> <div class="form-group"> <label for="post-desc">Comment:</label> <textarea class="form-input" id="post-desc" name="post-desc"></textarea> </div> <div class="form-group"> <button type="submit" class="btn btn-primary">Create</button>  </div> </form> </div>'}
    
   
    document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
}


document
.querySelector('#topg')
.addEventListener('click', formbuttoncomment);