import { Button, Result } from 'antd';
import Link from 'next/link';
import Layout from '@/Components/Layout';
export default function Custom404() {
    return <Layout title="404">  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><Link href="/">Back Home</Link></Button>}
  /></Layout>
    
  
  }