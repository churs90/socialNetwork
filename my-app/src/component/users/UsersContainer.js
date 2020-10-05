import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    changeCurrentPage,
    follow, getUsers, isFetching,
    setTotalUsersCounts,
    setUsers, toggleISFollowingProgress,
    unFollow
} from "../../redux/userPageReducer";
import * as axios from "axios";
import Preloader from "../preloader/Preloader";
import {userApi} from "../../api/api";
import {withAuthRedirect} from "../../authRedirect/authRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.pageSize,this.props.usersPage.currentPage)
    }

    changeCurrentPage = (pageNumber) => {
        this.props.changeCurrentPage(this.props.usersPage.pageSize,pageNumber)
    };
    render() {
        return (<>
                {this.props.usersPage.isFetching && <Preloader/>}
            <Users usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   changeCurrentPage={this.changeCurrentPage}/>
            </>
        )
    }
}

    const mapStateToProps = (state) => {
        return {
            usersPage:state.usersPage
        }
    };

export default compose(connect(mapStateToProps,{follow,unFollow,changeCurrentPage,getUsers}))(UsersContainer);
