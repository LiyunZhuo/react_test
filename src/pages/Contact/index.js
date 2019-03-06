import React from 'react';
import './index.css';
import papa from '../../assets/avatar_papa.jpeg';
import husband from '../../assets/avatar_husband.jpeg';
import mama from '../../assets/avatar_mama.jpg';
// import cousin from '../../assets/avatar_cousin.jpeg';
import all from '../../assets/icon_all.jpg';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSubMenu: false,
        tempPeopleList: [{
            id: 1,
            name: 'Sean Oliver',
            appellation: 'Father',
            avatar: papa,
            isSelect: false,
        }, {
            id: 2,
            name: 'Frederick Wade',
            appellation: 'Husband',
            avatar: husband,
            isSelect: false,
        }, {
            id: 3,
            name: 'Clara Oliver',
            appellation: 'Mather',
            avatar: mama,
            isSelect: false,
        }, {
            id: 4,
            name: 'Elisabeth Carson',
            appellation: 'Cousin',
            // avatar: cousin,
            isSelect: false,
        }],
      };
    }


    subMenuHidden = () => {
      const {isSubMenu} = this.state;
      this.setState({
        isSubMenu: !isSubMenu,
      })
    }

    selectPeople = index => () => {
      const { tempPeopleList } = this.state;
      const state =tempPeopleList[index].isSelect;
      tempPeopleList[index].isSelect = !state;
      this.setState({
        tempPeopleList,
      })
    }

    render() {
      const { isSubMenu, tempPeopleList} = this.state;
      return (
        <div className="main-content">
          <div className="contact-wrap" >
            <div className="contact-top-category" onClick={this.subMenuHidden}>
              <div className="contact-title">PEOPLE</div>
              <div className={`right-arrow ${isSubMenu? 'vertical': ''}`} />
            </div>
           <div className={`contact-list ${isSubMenu? '': 'subMenuHidden'}`}>
              <div className="contact-list-Item">
                  <div className="grey" />
                  <div className="people-cell" >
                    <div className="people-avatar" style={{ backgroundImage: `url(${all})` }}/>
                    <div>
                        <div className="people-name">ALL</div>
                    </div>
                  </div>
                </div>
              {tempPeopleList.map((v, index)=>(
                <div className="contact-list-Item">
                  <div className={v.isSelect ? 'green' : 'grey'} />
                  <div className={`people-cell${v.isSelect ? ' isSelect' : ''}`} key={v.id} onClick={this.selectPeople(index)}>
                    {v.avatar?
                      <div className="people-avatar" style={{ backgroundImage: `url(${v.avatar})` }}/>
                      :
                      <div className="people-avatar-none" />
                    }
                    <div>
                        <div className="people-name">{v.name}</div>
                        <div className="people-appellation">{v.appellation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    )}
}

export default Contact;