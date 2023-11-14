import axios, { Axios } from "axios"
import { API } from "../../api/api_key"
import { get_all_user_posts } from "../../api/route_api"
import { GetUUID } from "../../cookie/cookie"
import AxiosInsta from "../../api/axios"

const { Component } = require("react")


class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            AllPostId: null
        }
    }


    GetUserPosts = async () => {
        await AxiosInsta.get(get_all_user_posts + GetUUID()).then((response) => {
            if (response.status === 200) {
                this.setState = ({ AllPostId: response.data.Message.id })
                console.log(response.data.Message.id)
            }
        }).catch(() => {

        })
    }

    componentDidMount() {
        this.GetUserPosts()
    }

    DisplayPosts() {
        let ArrayPost = []
        //    if (this.state.AllPostId){
        //     this.state.AllPostId.map((item , index) => (
        //         ArrayPost.push(<p>{item}p</p>)
        //     ))
        //    }
        return (
            <>
                {

            this.state.AllPostId.map((item , index) => (
                ArrayPost.push(<p>{item}p</p>)
            ))
           }
                
                <h1>Hello</h1>
            </>
        )
    }


    render() {
        return (
            <>
                <p>HEllo</p>
                <this.DisplayPosts />
            </>
        )
    }

}

export default Posts