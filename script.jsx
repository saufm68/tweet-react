class Extra extends React.Component {
    render() {
        return (
            <div className="four column row grayscale mb">
                <div className="column">
                    <h3>
                        <i className="wechat icon"></i>
                    </h3>
                </div>
                <div className="column">
                    <h3>
                        <i className="retweet icon"></i>{this.props.retweet}
                    </h3>
                </div>
                <div className="column">
                    <div className="ui right aligned container">
                        <h3>
                            <i className="heart outline icon"></i>{this.props.fav}
                        </h3>
                    </div>
                </div>
                <div className="column">
                    <div className="ui right aligned container">
                        <h3>
                            <i className="upload icon"></i>
                        </h3>
                    </div>
                </div>
            </div>
        );
    };
};

class Content extends React.Component {
    render() {
        if (this.props.entity.media) {
            if (this.props.entity.media[0].type === 'photo') {
                var entity = <img className="media" width="250px" height="250px" src={this.props.entity.media[0].media_url_https}/>
            } else if (this.props.entity.media[0].type === 'video') {
                var entity = <video className="media" width="250px" height="250px" controls>
                                <source src={this.props.entity.media[0].media_url_https} />
                                Your Browser does not support this media
                            </video>
            }
        } else {
            var entity;
        }
        return (
            <div className="row">
                <div className="column">
                    {this.props.content}
                    <div className="ui center aligned container">
                        {entity}
                    </div>
                </div>
            </div>
        );
    };
};

class User extends React.Component {
    render() {
        return (
            <div className="two column row">
                <div className="column">
                    <h3>{this.props.user.name}</h3>
                    <i className="certificate icon light-blue"></i>
                    <span className="grayscale">@{this.props.user.screen_name}</span>
                </div>
                <div className="column">
                    <div className="ui right aligned container">
                        <i className="chevron down icon"></i>
                    </div>
                </div>
            </div>
        );
    };
};

class Tweet extends React.Component {
    render() {
        return (
            <div className="ui grid each">
                <User user={this.props.tweet.user} />
                <Content content={this.props.tweet.text} entity={this.props.tweet.entities} />
                <Extra fav={this.props.tweet.favorite_count} retweet={this.props.tweet.retweet_count} />
            </div>
        );
    };
};

class Twitter extends React.Component {
    render() {
        let tweet = this.props.tweets.map((e, i) => {
           return <Tweet key={i} tweet={e} />
        });

        return (
            <div className="ui fluid container">
                {tweet}
            </div>
        );
    };
};

ReactDOM.render(
    <div className="ui text container">
        <div className="ui grid">
            <div className="row head-row">
                <div className="column">
                    <h1>
                        <i className="arrow left icon light-blue "></i>
                        <span className="ml">KANYE WEST</span>
                        <i className="certificate icon light-blue"></i>
                    </h1>
                </div>
            </div>
            <div className="four column row">
                <div className="column nav-row">
                    <div className="ui center aligned container">
                        <h3 className="nav-options">Tweets</h3>
                    </div>
                </div>
                <div className="column nav-row">
                    <div className="ui center aligned container">
                        <h3 className="nav-options">Tweets & Replies</h3>
                    </div>
                </div>
                <div className="column nav-row">
                    <div className="ui center aligned container">
                        <h3 className="nav-options">Media</h3>
                    </div>
                </div>
                <div className="column nav-row">
                    <div className="ui center aligned container">
                        <h3 className="nav-options">Likes</h3>
                    </div>
                </div>
            </div>
            <Twitter tweets={tweets} />
        </div>
    </div>,document.getElementById('root')
);








