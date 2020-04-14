import React, { Component } from 'react'
import { WritterWrapper, WritterItem, DownloadApp, WritterInfo } from '../style'
import { connect } from 'react-redux'

class Writter extends Component {
  render() {
    const { list } = this.props
    return (
      <WritterWrapper>
          <img className="ercode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
          <a className="APP" href="/">下载简书手机APP ></a>
          <div className="des">随时随地发现和创作内容</div>
          <div className="rmWritter">推荐作者</div>
          <a className="fresh" href="/">换一批</a>
          <div>
            {
              list.map((item) => {
                return (
                    <WritterInfo  key={item.get('id')}>
                      <img className="pic" src={item.get('imgUrl')} alt="" />
                      <div className="add">+关注</div>
                      <div className="title">{item.get('title')}</div>

                      <div className="des">{item.get('des')}</div>

                    </WritterInfo>
                )
              })
            }
          </div>

      </WritterWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.home.get('writterList')
})

export default connect(mapState, null)(Writter)
