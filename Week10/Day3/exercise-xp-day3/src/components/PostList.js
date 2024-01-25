import data from './data.json';
console.log(data)
const PostList = (props) => {


    return (
        <div>
           <h1>Hi This is a Title</h1>
           {data
        ? data.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))
        : null}
        </div>
    )
}

export default PostList;