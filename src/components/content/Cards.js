import React, { useState ,useEffect } from 'react';
import { Card, Icon, Image, Button, Form } from 'semantic-ui-react';


function Cards() {
    const [name, setName] = useState('')
    const [userName, setUsername] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userInput, setUserinput] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/exemple')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [])


    const setData = ({ name, login, followers, following,  public_repos, avatar_url }) => {
        setName(name);
        setUsername(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
    }

    const handleSearch = (e) => {
        setUserinput(e.target.value)
    }

    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
        .then(res => res.json())
        .then(data => {
            if(data.message){
                setError(data.message)
            } else {
                setData(data);
            }
        })
    }

  return (
        <div>
            { error ? ( <h1>{error}</h1>) : (
            <Card style={{ marginBottom: 30 }}>
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Header>{userName}</Card.Header>
                </Card.Content>
                <Card.Content >
                    <a>
                        <Icon name='user' />
                        {followers} Followers
                    </a>
                </Card.Content>
                <Card.Content extra >
                    <a>
                        <Icon name='user' />
                        {repos} Repositories
                    </a>
                </Card.Content>
                <Card.Content extra >
                    <a>
                        <Icon name='user' />
                        {following} Following
                    </a>
                </Card.Content>
                <Form.Input onChange={handleSearch}placeholder="Usuário Github" name="github user "/>
                <Button onClick={handleSubmit} style={{ marginTop: 10 }}content="Buscar"></Button>
            </Card>
        )}
        </div>
    )
}

export default Cards;
