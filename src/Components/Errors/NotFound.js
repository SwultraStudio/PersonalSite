import { Helmet } from "react-helmet-async";
const NotFound = ()=>{
    return <>
<Helmet>
        <title>غير متوفر</title>
</Helmet>

    <div>
      <h1 className="text-xl">404 - غير متوفر</h1>
      <p className="text-base">عذرا ، الصفحة التي تبحث عنها غير موجودة.</p>
    </div>
    </>
}

export default NotFound; 