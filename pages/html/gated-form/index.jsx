import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import FormWrapper from '../../../components/Formwrapper';
import LogoSlider from '../../../components/LogoSlider';


export default function casestudiesdetail({ menuItems }) {

    return (
        <Layout footerMenu={menuItems} theme={'black'}>
            <NextSeo
                title="Gated Form"
                description="ClearDigital"
            />
            <FormWrapper/>
            <LogoSlider contentname={'datawhite'} bgcolor={'bg-white grid__parallax dark'} pt={'none'} showGradient={false}/>
        </Layout>
    )
}  