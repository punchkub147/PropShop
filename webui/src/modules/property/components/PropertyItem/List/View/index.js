import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { notification, Icon } from 'antd';
import numeral from 'numeral';
import FontAwesome from 'react-fontawesome';

import * as WishListActions from '../../../../../../actions/wishlist-actions';

// const openNotification = () => {
//   notification.open({
//     message: 'บันทึกเรียบร้อย',
//     description: 'รายการที่บันทึกจะอยู่ในส่วนของผู้ใช้.',
//     icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
//   });
// };

class List extends Component {

  static propTypes = {
    // actions: T.shape({
    //   fetchPropertiesByAgent: T.func,
    // }).isRequired,
    item: T.shape().isRequired,
    wishlist: T.arrayOf().isRequired,
  }

  handleWishList = (itemId) => {
    // openNotification();
    // const { userId } = this.props;
    // const { createWishlist, getWishlist } = this.props.actions;
    // createWishlist(userId, itemId);
  }

  render() {
    const { item } = this.props;

    if (!item) return (<div />);

    console.log('sdkowqkowdqoj', item);

    return (
      <div className="List">
        <div className="row">
          <div className="col-md-3 vcenter">
            <div className="image">
              <img src={item.mainImage} alt={item.project} />
            </div>
          </div>
          <div className="col-md-3 vcenter">
            <div className="info">
              <div className="project">{item.project || item.address}</div>
              <div className="price">{numeral(item.price).format('0,0')} บาท</div>
              <div className="place">{item.street} - {item.province}</div>
              <div className="description">{item.announceDetails}</div>
            </div>
          </div>
          <div className="col-md-3 vcenter">
            <div className="status">ประกาศ: {item.for}</div>
            <div className="area-size">
              <div>พื้นที่ใช้สอย:</div>
              <div>{item.areaSize} ตร.ว.</div>
            </div>
          </div>
          <div className="col-md-3 vcenter">
            <div className="area-size">
              <div>ประเภทอสังหาฯ:</div>
              <div>{item.residentialType}</div>
            </div>
            <div className="option">
              <ul>
                {item.bedroom > 0 &&
                  <li><FontAwesome name="bed" /> <span>{item.bedroom}</span> ห้องนอน</li>
                }
                {item.bathroom > 0 &&
                  <li><FontAwesome name="bath" /> <span>{item.bathroom}</span> ห้องน้ำ</li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.domain.accountWishlist.data,
    userId: state.user.data.id,
  };
};

const actions = {
  createWishlist: WishListActions.createWishlist,
  getWishlist: WishListActions.getWishlist,
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
