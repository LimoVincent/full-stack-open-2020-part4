import React from 'react'

function Blog({ blogs }) {
  return (
    <div>
      <p>
        {blogs.map(({ title, url, likes, date, author, id }) => (
          <div
            className=' my-5 card border rounded  p-2'
            style={{ backgroundColor: '#e3f2fd' }}
          >
            <a href={url}>
              <p>{title}</p>
            </a>
            <hr />
            <p>{id}</p>

            <p>{new Date(date).toLocaleString('en-GB')}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis quod rem id in dolore suscipit, distinctio officia
              atque corrupti deleniti ab architecto, quos mollitia vitae magni
              repudiandae asperiores iusto nisi? Delectus quod tempora quasi
              facilis culpa iusto ad eos officia, alias dignissimos
              necessitatibus quia perferendis dicta unde ipsa obcaecati
              possimus. Repudiandae voluptatum at ratione quidem sequi est
              libero aut sapiente. Repudiandae explicabo dolore accusamus esse.
              Non, magni perspiciatis in consequatur delectus quidem nesciunt
              repudiandae, omnis qui velit rem doloribus assumenda pariatur
              excepturi perferendis quae. Nesciunt modi in explicabo aspernatur
              laboriosam. Aperiam placeat voluptatibus dolore aspernatur illum
              ad maxime, error eum id iste eveniet pariatur dignissimos sed
              repellat adipisci eaque ut accusamus itaque nobis. Dolore, ab
              delectus in veniam magnam vero. Repudiandae nobis quae culpa quasi
              ipsum pariatur! Voluptatibus, animi eligendi rerum error
              distinctio quasi omnis qui laborum corporis architecto aspernatur
              dignissimos, est placeat id asperiores recusandae obcaecati, neque
              voluptatem veniam!
            </p>
          </div>
        ))}
      </p>
    </div>
  )
}

export default Blog
