import Button from './Shared/Button'
import Input from './Shared/Input'
import TextArea from './Shared/TextArea'

const ContactUs = () => {
  return (
    <div className='flex items-center flex-col'>
      <form className='max-w-[600px] my-[60px] flex flex-col gap-10 mx-[30px]'>
        <div className="flex sm:flex-row flex-col gap-[20px]">
          <Input
            Label='First Name'
            HtmlFor='firstName'
            type='text'
            inputClass="flex-1"
            textSize=' font-bold'
            mb='[20px]'
            Name='firstName'
            important
          />
          <Input
            Label='Last Name'
            HtmlFor='lastName'
            type='text'
            inputClass="flex-1"
            textSize=' font-bold'
            mb='[20px]'
            Name='lastName'
            important
          />
        </div>
        <Input
          Label='Email'
          HtmlFor='email'
          type='email'
          textSize='[20px] font-bold'
          mb='[20px]'
          Name='email'
          important
        />
        <TextArea
          Label="Message"
          Name='message'
          id='message'
          important
          areaWrapClass='!font-bold'
        />
        <Button
          content='Submit'
          btnClass='max-w-[100px] !text-[20px]/[30px]'
          btnType='submit'
        />
      </form>
    </div>
  )
}

export default ContactUs