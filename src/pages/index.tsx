import MainHeader from '@/components/main-header';
import MainBody from '@/components/main-body';
import { useRecoilState } from 'recoil';
import { pageNameState } from '../states';

const IndexPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  return (
    <div>
      <MainHeader />
      <MainBody />
    </div>
  );
};

export default IndexPage;
