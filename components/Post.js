import Image from "next/image";

const Post = ({ post }) => {
  const { title, thumbnail, slug, categories } = post;
  return (
    <div>
      {/* <Image src="" layout="fill" alt="ae86"/> */}
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Post;
