export default function Header(props) {
  return (
    <div className=" pt-8 grid w-full">
      <div className='text-3xl col-start-2 font-bold'>Notes</div>
      <div className="text-3xl col-start-12 font-bold">{props.Name}</div>
    </div>
  )
}