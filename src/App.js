// import IncDic from "./component/IncDic/incdic.jsx";
import { useState } from "react";
import PostItems from "./component/postItem/PostItems.jsx";
import Input from "./component/UI/input/Input.jsx";
import Button from "./component/UI/button/Button.jsx";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "кто украл мой сладкий рулет",
      print:
        "не опознаный обьект украл рулет у гражданина на против от чего что то пошло не поплану",
    },
    {
      id: 2,
      title: "кто украл мой сладкий рулет",
      print:
        "не опознаный обьект украл рулет у гражданина на против от чего что то пошло не поплану",
    },
    {
      id: 3,
      title: "кто украл мой сладкий шоколад",
      print:
        "не опознаный обьект украл рулет у гражданина на против от чего что то пошло не поплану",
    },
    {
      id: 4,
      title: "кто украл мой сладкий мед",
      print:
        "не опознаный обьект украл рулет у гражданина на против от чего что то пошло не поплану",
    },
  ]);

  const [title, setTitle] = useState("");
  const [print, setPrint] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      print,
    };

    if (title.trim() === "" || print.trim() === "") {
      alert("Заполните все поля");
    } else {
      setPosts([...posts, newPost]);
      setTitle("");
      setPrint("");
    }
  };

  return (
    <div className="App container">
      <div className="form-card">
        <div className="form-title__info">
          <h1 className="form-title">Связь со специалистом</h1>
          <p className="form-print">
            В мнгновение око вам помогут без проблем Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Molestiae modi, culpa quasi pariatur
            inventore optio quia provident, quam laborum dignissimos magnam enim
            ratione aliquam magni quo labore maiores! Explicabo, quisquam.
          </p>
        </div>
        <form className="form">
          <div className="label-form">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Введите заголовок"
            />
          </div>
          <div className="label-form">
            <Input
              value={print}
              onChange={(e) => setPrint(e.target.value)}
              placeholder="Введите тело"
            />
          </div>
          <Button onClick={addNewPost}>Отправить</Button>
        </form>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <PostItems key={post.id} title={post.title} print={post.print} />
        ))}
      </div>

      {/* <PostItems /> */}
    </div>
  );
}

export default App;
