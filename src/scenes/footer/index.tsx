import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">

    <div className="justify-content mx-auto w-5/6 pag-16 md:flex ">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="Logo" src={Logo} />
            <p className="my-5 pr-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum excepturi totam libero qui dolorum, dignissimos dicta quis odit. Cum, possimus! Amet corrupti debitis ipsa neque delectus temporibus, ex quasi nisi.</p>
            <p> &copy;  Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Massa orci senectus</p>
            <p className="my-5">Et gravida id et etian</p>
            <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
            <p>(333)425-68-25</p>         
        </div>
    </div>
    </footer>
    
  )
}

export default Footer