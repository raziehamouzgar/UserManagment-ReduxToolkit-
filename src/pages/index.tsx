import { useSelector, useDispatch } from "react-redux";
import { userSlice } from "@/features/users";
import { addUser , deleteUser } from "@/features/users";
import { useState } from "react";

export default function Home() {
  //قدم پنجم: با دستور سلکتور ردیوسر رو میگیریم که شامل استیتی هست که اطلاعات یوزرا رو داره
  // و بعد مپ میکنیم و اطلاعاتو نشون میدیم
  const userList = useSelector((state) => state.users.value);
  console.log(userList);

  //برای اجرای action ما نیاز به هوکی به نام useDispatch داریم
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  
  return (
    <>
      <div className="py-2">
        <input
          type="text"
          placeholder="Name..."
          className="p-2 m-2"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username..."
          className="p-2 m-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className=" border border-gray-300 p-2 m-2 hover:bg-green-500 hover:text-white"
        onClick={
          //فراخوانی دیسپچ برای صدا زدن اکشنه اضافه کردن
          ()=>{
            dispatch(addUser(
              {
                //قدار id یا شناسه به خاطر اینکه تکراری نباشه ابتدا id رکورد قبلی(آخر) رو می گیریم و یکی بهش اضافه می کنیم
                id: userList[userList.length - 1].id + 1,
                name ,
                username,
              }
            ))
          }
        }
        >Add User</button>
      </div>
      <div>
        {userList.map((usr) => {
          return (
            <div key={usr.id}>
              {usr.id} -{usr.name} - {usr.username}<button className="ml-4 border border-gray-300 hover:bg-red-500 hover:text-white"
              onClick={
                ()=>{
                  dispatch(deleteUser({id:usr.id}))
                }
              }
              >Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
