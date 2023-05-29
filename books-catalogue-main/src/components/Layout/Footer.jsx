const Footer = () => {
  return (
    <footer className='bg-[#d7bb3e] text-[#f7f7f7] min-h-[60px] flex items-center justify-center'>
      &copy; {new Date().getFullYear()}
      <span className='text-black pl-2'> Tifee</span>
    </footer>
  )
}

export default Footer
