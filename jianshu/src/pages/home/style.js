import styled from 'styled-components'

export const HomeWrapper = styled.div`
  margin: 0 auto;
  width: 960px;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .Topic-pic{
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 5px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    font-size: 20px;
    font-style: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-style: 13px;
    line-height: 24px;
    color: #999;
  }
`;
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;
export const WritterWrapper = styled.div`
  width: 278px;
  /* border: 1px solid #dcdcdc; */
  border-radius: 3px;
  height: 500px;
  /* line-height: 300px; */
  /* text-align: center; */
`;
export const DownloadApp = styled.div`
  height: 60px;
  margin-bottom: 30px;
  padding: 9px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  /* position: relative; */
  .ercode{
    width: 60px;
    height: 60px;
    display: block;
    float: left;
  }
  .APP{
    font-size: 17px;
    color: #333;
    text-decoration: none;
    /* box-sizing: border-box; */
    display: block;
    margin-top: 8px;
    margin-left: 70px;
  }
  .des{
    font-size: 15px;
    color: #999;
    display: block;
    margin-top: 10px;
    margin-left: 70px;
  }
`;
export const WritterItem = styled.div`
  width: 278px;
  height: 400px;
  border: 1px solid #dcdcdc;
  /* float: right; */
  .rmWritter{
    font-style: 15px;
    color: #999;
    /* margin: 8px; */
    float: left;
  }
  .fresh{
    font-size: 15px;
    color: #999;
    float: right;
    text-decoration: none;
  }
`;
export const WritterInfo = styled.div`
  height: 80px;
  margin-top: 30px;
  .pic{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: block;
    float: left;
  }
  .title{
    font-size: 16px;
    color: #333;
    margin-left: 60px;
    padding-top: 6px;
    margin-right: 60px;
    /* float: left; */
    display: block;
    
  }
  .des{
    font-size: 14px;
    color: #969696;
    margin-left: 60px;
    /* float: left; */
    display: block;
    padding-top: 5px;
    /* margin: 2px 10px ; */
  }
  .add{
    font-size: 16px;
    float: right;
    color: #42c021;
    margin-top: 5px;
    padding: 0;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
`;