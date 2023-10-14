import React from 'react'
import './deleteAndEditPost.css'
const DeleteAndEditPost = ({isOpen , onDelete ,postId ,onChange , close}) => {

       const  handleOnChange =()=> {
        onChange(postId)
        close(false)
        }

        const handelOnDelete =()=>{
            onDelete(postId)
            close(false)

        }
    if(isOpen){
        return (
            <div className='delete-edit-model'>
                <p className='delete' onClick={handelOnDelete}>Delete</p>
                <hr/>
                <p className='edit'  onClick={handleOnChange}>Edit</p>
            </div>
          )
    }
    else <></>
 
}

export default DeleteAndEditPost
