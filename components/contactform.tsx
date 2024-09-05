const ContactForm = () => {
  return (
    <div className="hero bg-base-200 w-full h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Get in touch</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form action={async (form: FormData) => {
            'use server'
            console.log(form)
          }} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <input name="message" type="text" placeholder="Message" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
