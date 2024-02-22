'use client';

import React from 'react'
import querystring from 'querystring';
import { useState,useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/spotify.module.css';

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const client_id = "4b074d5dad0e429cb27ffa55b0affeb8";
const client_secret = "7bb32fc26c6e48268d48a8d9f39e547b";
const refresh_token = "AQA8WUGG8cKRT7ZNNZfJQb43F57CEZpLshKv55p3taK9owR5ZBp-RbwKGN01A0_C0w99AaF6MgX22uMH2OQcSbTzDJ0TMY-tCuKNi0dn34XCViPCVoXkTVCaaZ3zKBUJ-iI";

//Function to generate an access token using the refresh token everytime the website is opened or refreshed
export const getAccessToken = async (client_id, client_secret, refresh_token) => {
    //Creates a base64 code of client_id:client_secret as required by the API
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    //The response will contain the access token
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token,
        }),
    });

  return response.json();
};

export const getNowPlaying = async () => {
    try {
  
      //Generating an access token
      const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);
  
      //Fetching the response
      const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
  
      //If response status > 400 means there was some error while fetching the required information
      if (response.status > 400) {
        throw new Error('Unable to Fetch Song');
      } else if(response.status === 204) { //The response was fetched but there was no content
        throw new Error('Currently Not Playing')
      }
  
      //Extracting the required data from the response into seperate variables
      const song = await response.json();
      const albumImageUrl = song.item.album.images[0].url;
      const artist = song.item.artists.map((artist) => artist.name).join(', ');
      const isPlaying = song.is_playing;
      const songUrl = song.item.external_urls.spotify;
      const title = song.item.name;
      const timePlayed = song.progress_ms;
      const timeTotal = song.item.duration_ms;
      const artistUrl = song.item.album.artists[0].external_urls.spotify;
  
      //Returning the song details
      return {
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
        timePlayed,
        timeTotal,
        artistUrl
      };
    } catch (error) {
      console.error('Error fetching currently playing song: ', error);
      return error.message.toString();
    }
};

const Spotify = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
    useEffect(() => {
      const interval = setInterval(async () => {
        const song = await getNowPlaying();
        setNowPlaying(song);
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);

    let title='';
    let artist='';
    let albumImageUrl='';
    let playerState ='';

    if(nowPlaying !== null && nowPlaying.title){
    
        albumImageUrl = nowPlaying.albumImageUrl;
        title = nowPlaying.title;
        artist = nowPlaying.artist;
    }
    else if (nowPlaying === 'Currently Not Playing') { //If the response returns this error message then we print the following text in the widget
        playerState = 'OFFLINE';
        return(
            <div className={styles.offlineMode}>
                <p>User is offline</p>
            </div>)
      } 
      else { //If the response wasn't able to fetch anything then we display this
        return(
            <div className={styles.loadingContainer}>
                <span className={styles.loader}></span>
            </div>
        );
}
  return (
    <div className={styles.musicContainer}>
      <Image src={albumImageUrl} alt="Album Image" width={150} height={150} className={styles.imageAlbum} />
      <div className={styles.songInfo}>
        <h1>Song: {title}</h1>
        <h2>Artist: {artist}</h2>
      </div>
    </div>
   );
}

export default Spotify;