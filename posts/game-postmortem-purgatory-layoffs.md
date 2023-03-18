---
title: 'Game Jam Postmortem of Purgatory Layoffs'
excerpt: 'An overview what went right and what went wrong with my 2022 game jam game Purgatory Layoffs.'
coverImage: '/assets/blog/game-postmortem-purgatory-layoffs/cover.png'
date: '2022-06-14T18:35:07.322Z'
author:
  name: Jelani Harris
  picture: '/assets/blog/authors/jelani.png'
ogImage:
  url: '/assets/blog/game-postmortem-purgatory-layoffs/cover.png'
---
## Game Details

| Game Name | Created Date | Engine | Time To Create |
| --- | --- | --- | --- |
| Purgatory Layoffs | May 30th, 2022 | Unreal Engine 5.0 | 10 Days |

## The Jam Theme

It was in February when I decided to participate in the [GameDev.Tv](http://GameDev.Tv) game jam. I felt like I’ve been working on so many indie games in the darkness for so long that I needed to have a win; A playable game from start to end with some real deadlines to make sure it gets done.

Before the Jam started I wrote down some basic ideas from what the theme could be and then it was revealed when the jam started.

![GameDev.Tv Game Jam](/assets/blog/game-postmortem-purgatory-layoffs/GameDevJam.png)

The theme of the jam was “DEATH IS ONLY THE BEGINNING”, and I had to make a playable game in 10 days. It ran from **May 20th 2022 at 3:00 PM** to **May 30th 2022 at 5:00 PM** and I managed to turn in my game with 10 hours to spare towards the end. I immediately fell asleep because it was an all-nighter.

## Concept

The player would compete in an office with 5 other employees to not be on the chopping block for layoffs. Players need to collect folders on the map (work) and deposit them at their desk to add to their rating. 

Every 1:30 minutes the bottom one or two employees at the bottom of the rating list get eliminated from the game with an explosion. You can also earn rating by attacking the other coworkers and reducing their health to zero. The coworker will respawn into the game in 10 seconds.

Players have to decide how much work they’re willing to carry. The more work you’re carrying the slower you move and other coworkers can take advantage of that.

You can use your mana to sprint to move faster, but use it sparingly because you may need it to run away from a melee (which happens quite often)

## What went well

A lot of things went really well for my first game jam. I did a decent job pacing myself and taking breaks during the whole process. Plus with my experience in making my uncompleted games gave me the tools and the confidence I needed to deliver on *something*.

### Package game early

I had read about some of the nightmare scenarios involving Unreal Engine 5’s packaging system and all of the various and random crashes that would happen. I decided that at around day 8 of working on it that I would dedicate a bit of time to package the game into an executable format to make sure that it’s possible and that it works. Doing this early allowed me to have confidence in not having to have a panic “it won’t package” moment at the end.

### Getting the right assets

Being alone in a game jam is rough. I did have to model a couple of props for the office, but overall the chairs, the character models, the music, and the sound effects were done by other people. I was able to leverage assets from these fantastic sources:

- [Quaternius.com](http://quaternius.com/)
- [OpenGameArt.org](http://opengameart.org/)
- [FreeSound.org](http://freesound.org/)
- [TheBaseMesh.org](http://thebasemesh.org/)

## What went wrong

### Pausing? Pausing is for closers only

I had assumed that doing this would be a time consuming task because of all of the functionality I had stuffed into the GameMode blueprint. I had instead tied the escape key to just exiting the current level to the main menu, which can provide quite the surprise for someone who was currently winning their match but needed to step away for a bit.

Whoops.

But after the jam was over, it was as simple as adding a pause function and an unpause method to a button and I had regrets about not taking the 5 minutes to do this.

### Spooky Scary Skeletons

I had a ton of issue getting UE4 animations to work on the new UE5 Manny or Quinn skeletons. Whenever I attempted to retarget the animations, the hand bones would curl up in very odd places and it really made the attack animations look horrible. I burnt too much time and eventually ditched using the UE5 Mannequins and settled on using UE4s instead.

I was okay with this because the benefits that the UE5 skeleton brought (IK-foot placement) wasn’t important to the game because it all took place on a flat floor.

### Complex AI

I had grossly overestimated the level of sophistication for the AI that I needed to have to have the ability to have AI coworkers:

- Identify work on the ground that they need to pick up
- Move over into the pickup collision box for said work
- Collect work if possible (they could be full)
- Decide if they should path back to their desk or not
- Decide to fight another coworker if they’re at low health, at a higher rating, or carrying work

Thankfully I had made the right decision upfront to use behavior trees instead of stuffing the logic into the AiController, but debugging the tree behavior of rapidly changing priorities was a major headache and probably took up most of the time of the jam.

It also didn’t help that I was very very new to the world of behavior trees so there was a ton of trial and error and research on the best ways to approach a problem.

### Boring if you’re winning

Because the game is of the battle royale elimination nature, there are considerably less players on the field if they all get eliminated. This made it so that if there was 1v1 situation with the player versus a coworker you could not even see them the entire minute.

### Lack of store presentation

The thing that I immediately noticed was the lack of presentation of my game after creating the game page for it. Other entries had a more artful way of sucking players into playing the game with eye-catching art, and I just had a picture of an office with a red tint over it. Not very exciting.

There is no way for the player to know at a first glance what kind of game it is, or what I’ve made.

If you want to check out the other entries in the jam here is a [link to all Jam Entries](https://itch.io/jam/gamedevtv-jam-2022/entries)

## Overall

![Ranking of the game](/assets/blog/game-postmortem-purgatory-layoffs/rankings.png)

It didn’t do that bad in terms of ranking against the 940 other entries. I’m really proud of how I did. 

One thing I had to constantly remind myself of during the entire game jam was that I was just one person working alone, trying to do everything.

I feel like with the right amount of effort involved in making it more compelling and expanding of some features I think I could turn this into something worth putting on Steam. So stay tuned for that.