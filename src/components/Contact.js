const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="p-4 m-4 font-bold text-2xl">This is Contact PAge!</h1>
      <form className="flex flex-col items-center bg-purple-100 m-4 p-4 rounded-md">
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="message"
        />
        <button className="p-2 m-2 w-16 bg-black text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
