import React from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import {
  Heart,
  Chat,
  Share,
  BookMark,
  Menu,
  Prev,
  Next,
  HeartFull
} from "../Icons";
import Comments from "../Comments";
import Indicator from "../Indicator";
import PopUp from "../PopupFrame";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.whiteBox};
  width: 614px;
  user-select: none; /*클릭하면 하이라이트되는 거 없애는것 */
  min-height: 600px;
  margin-bottom: 60px;
`;

const PostCreatorColumn = styled.div`
  height: 60px;
  display: flex;
  padding: 16px;
  align-items: center; /* 상하를 의미함 align-items는 justify-contents는 좌우 */
`;

const CreatorAvatar = styled.div``;

const CreatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 17px;
`;

const Username = styled.span`
  font-size: 14px;
  color: ${props => props.theme.blackColor};
  font-weight: 600;
  margin-bottom: 5px;
`;

const Location = styled.span`
  font-size: 12px;
  color: ${props => props.theme.blackColor};
`;

const HeaderOption = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionAction = styled.div`
  cursor: pointer;
`;

const PostFileColumn = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const PostFile = styled.div`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const ToggleSlide = styled.div`
  width: 100%;
  display: flex;
  margin-top: 290px;
  margin-bottom: 230px;
`;

const PrevButton = styled.div`
  z-index: 2;
  width: 50%;
  display: flex;
  justify-content: flex-start;
`;

const PrevAction = styled.div`
  cursor: pointer;
  padding-left: 10px;
  svg {
    fill: white;
  }
`;

const NextButton = styled.div`
  z-index: 2;
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

const NextAction = styled.div`
  cursor: pointer;
  padding-right: 10px;
  svg {
    fill: white;
  }
`;

const SlideIndicator = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostBottomColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 190px;
`;

const BottomActionSection = styled.div`
  display: flex;
  padding: 0 16px;
  align-items: center;
  margin-top: 4px;
  width: 100%;
  min-height: 40px;
`;

const HeartButton = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const HeartAction = styled.div`
  cursor: pointer;
`;

const ChatButton = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const ChatAction = styled.div`
  cursor: pointer;
`;

const ShareButton = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const ShareAction = styled.div`
  cursor: pointer;
`;

const BookMarkButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const BookMarkAction = styled.div`
  cursor: pointer;
`;

const BottomLikeCountSection = styled.div`
  margin-bottom: 9px;
  padding: 0 16px;
`;

const LikeCount = styled.span`
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
`;

const BottomCaptionSection = styled.div`
  padding-top: 1px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
`;

const Caption = styled.span`
  font-size: 14px;
  padding-left: 7px;
  color: ${props => props.theme.blackColor};
`;

const BottomCommentSection = styled.div`
  margin-top: 10px;
  min-height: 50px;
  max-height: 80px;
  padding: 0 16px;
`;

const BottomCreateTimeSection = styled.div`
  width: 100%;
  font-size: 12px;
  padding: 0 16px;
  color: ${props => props.theme.lightGreyColor};
  margin-top: 6px;
  margin-bottom: 10px;
`;

const BottomAddCommentSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  border-top: ${props => props.theme.boxBorder};
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  resize: none;
  font-family: "Source Sans Pro", sans-serif;
  &:focus {
    outline: none;
  }
  font-size: 14px;
`;

const MoreComment = styled.span`
  width: 100%;
  margin-top: 4px;
  font-size: 13px;
  color: ${props => props.theme.lightGreyColor};
`;

export default props => {
  const filesLength = props.files.length;
  const smallComment = [];
  let makeCommentsArray = props.comments;
  if (props.comments.length > 3) {
    smallComment.push(makeCommentsArray[0]);
    makeCommentsArray = smallComment;
  }
  return (
    <PostWrapper>
      <PostCreatorColumn>
        <CreatorAvatar>
          <Avatar
            big={"no"}
            username={props.user.username}
            src={props.user.avatar}
          />
        </CreatorAvatar>
        <CreatorInfo>
          <Username>
            <Link to={`/${props.user.username}`}>{props.user.username}</Link>
          </Username>
          <Location>{props.location}</Location>
        </CreatorInfo>
        <HeaderOption>
          <OptionAction>
            <Menu />
          </OptionAction>
        </HeaderOption>
      </PostCreatorColumn>
      <PostFileColumn>
        {props.files &&
          props.files.map((file, index) => (
            <PostFile
              key={file.id}
              src={file.url}
              showing={index === props.currentItem}
            >
              {filesLength > 1 && (
                <ToggleSlide>
                  {props.currentItem !== 0 ? (
                    <PrevButton>
                      <PrevAction
                        onClick={() =>
                          props.setCurrentItem(props.currentItem - 1)
                        }
                      >
                        <Prev />
                      </PrevAction>
                    </PrevButton>
                  ) : (
                    <PrevButton />
                  )}
                  {props.currentItem + 1 !== filesLength ? (
                    <NextButton>
                      <NextAction
                        onClick={() =>
                          props.setCurrentItem(props.currentItem + 1)
                        }
                      >
                        <Next />
                      </NextAction>
                    </NextButton>
                  ) : (
                    <NextButton />
                  )}
                </ToggleSlide>
              )}
              {filesLength > 1 && (
                <SlideIndicator>
                  <Indicator
                    countArray={props.files}
                    currentItem={props.currentItem}
                  />
                </SlideIndicator>
              )}
            </PostFile>
          ))}
      </PostFileColumn>
      <PostBottomColumn>
        <BottomActionSection>
          <HeartButton>
            <HeartAction onClick={props.toggleLike}>
              {props.isLikedState ? <HeartFull /> : <Heart />}
            </HeartAction>
          </HeartButton>
          <ChatButton>
            <ChatAction>
              <Chat />
            </ChatAction>
          </ChatButton>
          <ShareButton>
            <ShareAction>
              <Share />
            </ShareAction>
          </ShareButton>
          <BookMarkButton>
            <BookMarkAction>
              <BookMark />
            </BookMarkAction>
          </BookMarkButton>
        </BottomActionSection>
        <BottomLikeCountSection>
          <LikeCount onClick={props.handleIsOpen}>{`좋아요  ${
            props.likeCountState
          }개`}</LikeCount>
        </BottomLikeCountSection>
        <BottomCaptionSection>
          <Username>
            <Link to={`/${props.user.username}`}>{props.user.username}</Link>
          </Username>
          <Caption>{props.caption}</Caption>
        </BottomCaptionSection>
        {props.comments.length > 3 ? (
          <BottomCommentSection>
            <Comments commentsArray={makeCommentsArray} />
            <Link to={`/post/${props.id}`}>
              <MoreComment>댓글 모두 보기</MoreComment>
            </Link>
          </BottomCommentSection>
        ) : (
          <BottomCommentSection>
            <Comments commentsArray={makeCommentsArray} />
            <Comments commentsArray={props.selfComments} />
          </BottomCommentSection>
        )}
        <BottomCreateTimeSection>{props.createdTime}</BottomCreateTimeSection>
        <BottomAddCommentSection>
          <Textarea
            placeholder={"댓글 달기..."}
            onKeyDown={props.onKeyDown}
            value={props.newComment.value}
            onChange={props.newComment.onChange}
          />
        </BottomAddCommentSection>
      </PostBottomColumn>
      {props.isOpenLikes && (
        <PopUp
          title={"Likes"}
          togglePopFn={props.handleIsOpen}
          kind={"LIKE"}
          postId={props.id}
        />
      )}
    </PostWrapper>
  );
};
