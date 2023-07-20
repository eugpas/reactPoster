import Modal from "../components/Modal";
import classes from "./DeletePost.module.css";
import { Link, Form, redirect } from "react-router-dom";

function DeletePost() {
  return (
    <Modal>
      <div className={classes.wrapper}>
        <h3>Are you sure you want to delete this post?</h3>
        <Form method="post" className={classes.form}>
          <p className={classes.actions}>
            <Link to=".." type="button">
              Cancel
            </Link>
            <button>Delete</button>
          </p>
        </Form>
      </div>
    </Modal>
  );
}

export default DeletePost;

export async function action({ params }) {
  await fetch("http://localhost:8080/posts/delete/" + params.id, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("..");
}
