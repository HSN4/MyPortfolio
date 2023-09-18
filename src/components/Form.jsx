import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Label, TextInput, Button, Textarea } from "flowbite-react";
import Buttons from "./Buttons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Upcard from "./Upcard";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gi5kly5",
        "template_ezf8s3r",
        form.current,
        "ktCpOAa-loD6wHNQ9"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message send", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="w-[600px]">
        <Upcard>
          {<h1 className="text-[32px] font-medium">Let’s talk</h1>}
        </Upcard>
        <Upcard>
          {
            <p className=" font-normal mb-[40px]">
              Ask me anything or just say hi...
            </p>
          }
        </Upcard>

        <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
          <Upcard>
            {
              <div className="flex ss:flex-row flex-col  gap-6">
                <div className="flex-1">
                  <Label
                    htmlFor="email1"
                    className="text-[16px]"
                    value="Your name"
                  />
                  <TextInput
                    className="mt-2  mb-4 "
                    type="text"
                    name="to_name"
                    id="email1"
                    placeholder="name"
                    required
                  />
                </div>
                <div className="flex-1">
                  <Label
                    htmlFor="password1"
                    className="text-[16px]"
                    value="Your email"
                  />
                  <TextInput
                    className="mt-2  mb-4"
                    type="email"
                    name="from_name"
                    id="password1"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
              </div>
            }
          </Upcard>
          <Upcard>
            {
              <div id="textarea">
                <Label
                  htmlFor="comment"
                  className="text-[16px]"
                  value="Your message"
                />
                <Textarea
                  className="mt-2  mb-4 "
                  id="comment"
                  name="message"
                  placeholder="Leave a comment..."
                  required
                  rows={4}
                />
              </div>
            }
          </Upcard>

          <Buttons type={"submit"} Text={"Send"} width={"w-[100%]"} />
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Form;
