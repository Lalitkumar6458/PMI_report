import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Image from 'next/image';

function UserAvatar({ name, imageSrc, size }) {
  if (imageSrc) {
    return (
      <Avatar size={size} src={<Image src={imageSrc} alt={name} width={size} height={size} />} />
    );
  } else {
    const initials = name?.split(' ').map(name => name.charAt(0)).join('');
    console.log(initials,"initials")
    return (
      <Avatar size={size} icon={<UserOutlined />} style={{ backgroundColor: '#87d068' }}>
        {initials}
      </Avatar>
    );
  }
}
export default UserAvatar