import React from 'react'

const Card = () => {
    return (
      <>
      <div className={props.style} style={{width: '18rem'}}/>
      <img src="https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/22ef2baf-b210-4882-afd9-1317bb7a3603.png" className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">Card title</h5>
          <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in natus aut omnis a iure quisquam, ex rem quos numquam optio ipsum deserunt rerum hic, quis est?</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </>
  )
}

export default Card