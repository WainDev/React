// import IncDic from "./component/IncDic/incdic.jsx";
import { useState } from "react";
import PostItems from "./component/postItem/PostItems.jsx";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      titile: "кто украл мой сладкий рулет",
      print:
        "не опознаный обьект украл рулет у гражданина на против от чего что то пошло не поплану",
    },
    {
      id: 2,
      titile: "кто украл мой сладкий рулет",
      print:
        "не опознаный обьект украл рулет у гражданина на против от чего что то пошло не поплану",
    },
    {
      id: 3,
      titile: "кто украл мой сладкий шоколад",
      print:
        "не опознаный обьект украл рулет у гражданина на против от чего что то пошло не поплану",
    },
    {
      id: 4,
      titile: "кто украл мой сладкий мед",
      print:
        "не опознаный обьект украл рулет у гражданина на против от чего что то пошло не поплану",
    },
  ]);

  return (
    <div className="App container">
      <div className="posts">
        {posts.map((post) => (
          <PostItems key={post.id} titile={post.titile} print={post.print} />
        ))}
      </div>

      {/* <PostItems /> */}
    </div>
  );
}

export default App;
