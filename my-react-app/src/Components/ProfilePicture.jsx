const ProfilePicture = () => {
  const imageUrl = 'https://via.placeholder.com/150'
  const handleClick = (e) => {
    e.target.style.display = 'none'
    console.log('OUCH!')
  }

  return (
    <div>
      <img onClick={(e) => handleClick(e)} src={imageUrl} alt='exmimg' />
    </div>
  )
}

export default ProfilePicture
