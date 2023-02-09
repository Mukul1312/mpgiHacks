import React from 'react'
// import SocialHandle from '../SocialHandle/socialHandle';


export default function ProfileCard(props) {

    function IsHead(){
        if (props.memberPost.includes("Head") && !(props.memberPost.includes("Associate"))) {
            return (
                <div className="Associates">
                    <p>Associates Head</p>                                
                </div>
            );
          
        }else {
            return null;
        }
    }

    return (
        <div>
            <div className="profile-card" style={{backgroundImage:`url(${props.memberPhoto})`}}>
                <div className="profile-card-content">   
                   <h3 className="profile-card-title">{props.memberName}</h3>
                   <p className="">{props.memberPost}</p>
                   {/* <SocialHandle /> */}
                   <IsHead />
                </div>
            </div>
        </div>
    )
}

ProfileCard.defaultProps = {
    memberPhoto: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    memberName: "Member Name",
    memberPost: "Volunteer"
}

// "https://cn.i.cdn.ti-platform.com/cnapac/content/2017/showpage/ben-10/sa/showicon.png"