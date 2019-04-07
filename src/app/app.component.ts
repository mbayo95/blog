import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    new Post(
      'My first post',
      'Web sensors are a kind of sensors network adapted for environmental monitoring but it is also associated with' +
      ' a system of detection used by Internet. Concerning our project, we seek in this project to automatically detect ' +
      'an event arousing aninterest in order to classify it. The detection ofevent will be done starting from articles, ' +
      'ofcomments, tweets in order to create a story,which gathers tweets reflecting the important moments of an event ' +
      '(main goal of our project). We will base our work on Twitter and different sites of information' +
      'Twitter is one of the most used social network with more than 500 millions tweets sent per day. ',
      0,
      new Date(2008, 12, 25)
    ),
    new Post(
      'My second post',
      'Web Sensors are used  in particular in the following fields: Cloud Computing for the scanning of keywords in an article,' +
      ' the search of an event based on the profiles created in the first year  Data Mining for the classification ',
      0,
      new Date(2014, 5, 6)
    ),
    new Post(
      'My third post : Example 1 : Importance Web Sensors\'',
      'a journalist who is always in search of better information and to have an objective glance on the news. By using our application, ' +
      'he would be able to obtain information of his needs.' +
      'He would be able to recover the story of the event which contains the important tweets of theevent. These tweets would ' +
      'indicate the important facts of the event for the journalist.' +
      'But also an index of the popularity of the event to compare with ' +
      'other events of the same category. ' +
      'Once all this information collected , he would be able to write his article. his article will have ' +
      'the advantage of basing itself on multitudes ofdifferent sources and it would have the bystanders description of the facts ',
      0,
      new Date(2016, 7, 23)
    ),
    new Post(
      'My fourth post : Example 2 : Importance Web Sensors',
      'Let us take the example of a company whichis in the medium of the Video games. Its team of communication will ' +
      'be able to have severalindices provided by our application concerning the release of their game. It will be able:' +
      ' To supervise the popularity of the event thanks to the numbers of tweets sent daily' +
      'To have a feedback on the important tweets andthe points most seen on Twitter ' +
      ' Thanks to the communities, it will be able to have a feedbacj of the most animated discussions' +
      'All this information will make it possible for the team to manage and prepare ' +
      'their communication which will be based onobjective points using our application.',
      0,
      new Date(2019, 2, 12)
    )
  ];


}
