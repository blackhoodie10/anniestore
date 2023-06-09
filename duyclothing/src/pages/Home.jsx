import React  from 'react';
import Helmet from '../component/Helmet';

import HeroSlider from '../component/HeroSlider';

import Section, { SectionBody, SectionTitle } from '../component/Section';

import PolicyCard from '../component/PolicyCard';

import Grid from '../component/Grid';

import policy from '../assets/fake-data/policy';

import heroSliderData from '../assets/fake-data/hero-slider';

import productData from '../assets/fake-data/products';

import { Link } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

import banner from '../assets/images/banner.jpg';

const Home = () => {

  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}
        <HeroSlider
          data={heroSliderData}
          control={true}
          auto={false}
          timeOut={5000}
        />
      {/* end hero slider */}

      {/* policy section */}
        <Section>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                policy.map((item , i) => <Link key={i} to="/policy">
                  <PolicyCard
                  key={i}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
                </Link>)
              }
            </Grid>
          </SectionBody>
        </Section>
      {/* end policy section */}

      {/* best selling section */}
        <Section>
          <SectionTitle>
            Top Sản Phẩm Bán Chạy Trong Tuần
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                productData.getProducts(4).map((item , i) => (
                  <ProductCard
                    key={i}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))
              }
            </Grid>
          </SectionBody>
        </Section>
      {/* end best selling section */}

      {/* new arrival section */}
      <Section>
          <SectionTitle>
              Sản phẩm mới
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                productData.getProducts(8).map((item , i) => (
                  <ProductCard
                    key={i}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))
              }
            </Grid>
          </SectionBody>
        </Section>
      {/* end new arrival section */}

      {/* banner */}
        <Section>
          <SectionBody>
            <Link to="/catalog">
                <img src={banner} alt="" />
            </Link>
          </SectionBody>
        </Section>
      {/* end banner */}

      {/* popular section */}
      <Section>
          <SectionTitle>
              Sản phẩm nổi bật
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                productData.getProducts(12).map((item , i) => (
                  <ProductCard
                    key={i}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))
              }
            </Grid>
          </SectionBody>
        </Section>
      {/* end popular section */}
    </Helmet>
  );
}

export default Home;
