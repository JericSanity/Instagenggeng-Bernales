import { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const images = {
  myAvatar: require('../../../Image/post2_files/729737878_18054650219766285_7319868791941121770_n.jpg'),
  post1: require('../../../Image/Post1.jpg'),
  milbertPost: require('../../../Image/MilbertPost.jpg'),
  milbertAvatar: require('../../../Image/milbertprof.jpg'),
  jeb: require('../../../Image/jeb.jpg'),
  jayr: require('../../../Image/Jayr.jpg'),
  jonathan: require('../../../Image/jonathan.jpg'),
  gabule: require('../../../Image/Gabule.jpg'),
  ireneo: require('../../../Image/ireneo.jpg'),
};

const toSource = (value: ImageSourcePropType | string) =>
  typeof value === 'string' ? { uri: value } : value;

const imageOptions = [
  { key: 'post1', source: images.post1 },
  { key: 'milbertPost', source: images.milbertPost },
  { key: 'jeb', source: images.jeb },
  { key: 'jayr', source: images.jayr },
  { key: 'jonathan', source: images.jonathan },
  { key: 'gabule', source: images.gabule },
  { key: 'ireneo', source: images.ireneo },
];

export default function HomeScreen() {
  type Post = {
    id: string;
    username: string;
    location: string;
    captionUser: string;
    caption: string;
    image: ImageSourcePropType | string;
    avatar: ImageSourcePropType | string;
    likes: string;
    comments: string;
    time: string;
  };

  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      username: 'sir.berny',
      location: 'Cagayan De Oro, Philippines',
      captionUser: 'chenieanee',
      caption: 'For Keeps. 🌅',
      image: images.post1,
      avatar: images.myAvatar,
      likes: '2,481 likes',
      comments: 'View all 124 comments',
      time: '2 HOURS AGO',
    },
    {
      id: '2',
      username: 'Milbert',
      location: 'Opol, Philippines',
      captionUser: 'Milbert.G',
      caption: 'Another beautiful day to explore. ✨',
      image: images.milbertPost,
      avatar: images.milbertAvatar,
      likes: '1,092 likes',
      comments: 'View all 48 comments',
      time: '5 HOURS AGO',
    },
  ]);
  const [showPostMenu, setShowPostMenu] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<{
    username: string;
    location: string;
    captionUser: string;
    caption: string;
    image: ImageSourcePropType | string;
  }>({
    username: '',
    location: '',
    captionUser: '',
    caption: '',
    image: '',
  });
  const [createForm, setCreateForm] = useState<{
    location: string;
    caption: string;
    image: ImageSourcePropType | string;
  }>({
    location: '',
    caption: '',
    image: '',
  });

  const openPostMenu = (id: string) => {
    setSelectedPostId(id);
    setShowPostMenu(true);
  };

  const handleCreatePost = () => {
    if (!createForm.image || !createForm.caption) return;
    setPosts((prev) => [
      {
        id: Date.now().toString(),
        username: 'sir.berny',
        location: createForm.location || 'Cagayan De Oro, Philippines',
        captionUser: 'sir.berny',
        caption: createForm.caption,
        image: createForm.image,
        avatar: images.myAvatar,
        likes: '0 likes',
        comments: '',
        time: 'JUST NOW',
      },
      ...prev,
    ]);
    setCreateForm({ location: '', caption: '', image: '' });
    setShowCreateModal(false);
  };

  const handleUpdatePost = () => {
    const post = posts.find((p) => p.id === selectedPostId);
    if (!post) return;
    setEditForm({
      username: post.username,
      location: post.location,
      captionUser: post.captionUser,
      caption: post.caption,
      image: post.image,
    });
    setShowEditModal(true);
  };

  const handleSavePost = () => {
    setPosts((prev) =>
      prev.map((p) => (p.id === selectedPostId ? { ...p, ...editForm } : p))
    );
    setShowEditModal(false);
  };

  const handleDeletePost = () => {
    setShowDeleteModal(true);
  };

  const confirmDeletePost = () => {
    setPosts((prev) => prev.filter((p) => p.id !== selectedPostId));
    setShowDeleteModal(false);
    setSelectedPostId(null);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>Instagenggeng</Text>

        <View style={styles.headerIcons}>
          <Pressable onPress={() => setShowCreateModal(true)}>
            <Text style={styles.headerIcon}>＋</Text>
          </Pressable>
          <Text style={styles.headerIcon}>♡</Text>
          <Text style={styles.headerIcon}>➤</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* STORIES */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.stories}
        >
          <View style={styles.story}>
            <View style={styles.addStory}>
              <Image
                source={images.myAvatar}
                style={styles.storyImage}
              />
              <Text style={styles.plus}>+</Text>
            </View>
            <Text style={styles.storyName}>Your story</Text>
          </View>

          <View style={styles.story}>
            <View style={styles.storyBorder}>
              <Image source={images.jeb} style={styles.storyImage} />
            </View>
            <Text style={styles.storyName}>Jeboy</Text>
          </View>

          <View style={styles.story}>
            <View style={styles.storyBorder}>
              <Image source={images.jayr} style={styles.storyImage} />
            </View>
            <Text style={styles.storyName}>roameowww</Text>
          </View>

          <View style={styles.story}>
            <View style={styles.storyBorder}>
              <Image source={images.jonathan} style={styles.storyImage} />
            </View>
            <Text style={styles.storyName}>Jonathan</Text>
          </View>

          <View style={styles.story}>
            <View style={styles.storyBorder}>
              <Image source={images.gabule} style={styles.storyImage} />
            </View>
            <Text style={styles.storyName}>Gabule</Text>
          </View>

          <View style={styles.story}>
            <View style={styles.storyBorder}>
              <Image source={images.ireneo} style={styles.storyImage} />
            </View>
            <Text style={styles.storyName}>ireneo</Text>
          </View>
        </ScrollView>

        <View style={styles.divider} />

        {/* POSTS */}
        {posts.map((post) => (
          <View key={post.id}>
            <View style={styles.post}>
              <View style={styles.postHeader}>
                <Image source={toSource(post.avatar)} style={styles.avatar} />
                <View style={styles.userInfo}>
                  <Text style={styles.username}>{post.username}</Text>
                  <Text style={styles.location}>{post.location}</Text>
                </View>
                <Pressable onPress={() => openPostMenu(post.id)}>
                  <Text style={styles.more}>•••</Text>
                </Pressable>
              </View>

              <Image source={toSource(post.image)} style={styles.postImage} />

              <View style={styles.postActions}>
                <View style={styles.leftActions}>
                  <Text style={styles.actionIcon}>♡</Text>
                  <Text style={styles.actionIcon}>♧</Text>
                  <Text style={styles.actionIcon}>➤</Text>
                </View>
                <Text style={styles.actionIcon}>♧</Text>
              </View>

              <View style={styles.captionContainer}>
                <Text style={styles.likes}>{post.likes}</Text>
                <Text style={styles.caption}>
                  <Text style={styles.username}>{post.captionUser} </Text>
                  {post.caption}
                </Text>
                {post.comments ? (
                  <Text style={styles.comments}>{post.comments}</Text>
                ) : null}
                <Text style={styles.time}>{post.time}</Text>
              </View>
            </View>
            <View style={styles.divider} />
          </View>
        ))}

      </ScrollView>

      
      <Modal
        visible={showPostMenu}
        transparent
        animationType="fade"
        onRequestClose={() => setShowPostMenu(false)}
      >
        <Pressable style={styles.menuBackdrop} onPress={() => setShowPostMenu(false)}>
          <View style={styles.menuCard}>
            <Pressable onPress={() => { setShowPostMenu(false); handleUpdatePost(); }}>
              <Text style={styles.menuItem}>Update</Text>
            </Pressable>
            <Pressable onPress={() => { setShowPostMenu(false); handleDeletePost(); }}>
              <Text style={[styles.menuItem, styles.menuDelete]}>Delete</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>

      <Modal
        visible={showEditModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowEditModal(false)}
      >
        <View style={styles.editBackdrop}>
          <View style={styles.editCard}>
            <Text style={styles.editTitle}>Edit Post</Text>
            <Text style={styles.editLabel}>Image</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imagePicker}>
              {imageOptions.map((opt) => (
                <Pressable
                  key={opt.key}
                  onPress={() => setEditForm({ ...editForm, image: opt.source })}
                >
                  <Image
                    source={opt.source}
                    style={[
                      styles.pickerImage,
                      editForm.image === opt.source && styles.pickerImageSelected,
                    ]}
                  />
                </Pressable>
              ))}
            </ScrollView>
            <TextInput
              style={styles.editInput}
              value={editForm.location}
              onChangeText={(v) => setEditForm({ ...editForm, location: v })}
              placeholder="Location"
            />
            <TextInput
              style={styles.editInput}
              value={editForm.caption}
              onChangeText={(v) => setEditForm({ ...editForm, caption: v })}
              placeholder="Caption"
            />
            <View style={styles.editButtons}>
              <Pressable onPress={() => setShowEditModal(false)}>
                <Text style={styles.menuItem}>Cancel</Text>
              </Pressable>
              <Pressable onPress={handleSavePost}>
                <Text style={[styles.menuItem, { color: '#0095f6' }]}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showCreateModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCreateModal(false)}
      >
        <View style={styles.editBackdrop}>
          <View style={styles.editCard}>
            <Text style={styles.editTitle}>Create Post</Text>
            <Text style={styles.editLabel}>Image</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imagePicker}>
              {imageOptions.map((opt) => (
                <Pressable
                  key={opt.key}
                  onPress={() => setCreateForm({ ...createForm, image: opt.source })}
                >
                  <Image
                    source={opt.source}
                    style={[
                      styles.pickerImage,
                      createForm.image === opt.source && styles.pickerImageSelected,
                    ]}
                  />
                </Pressable>
              ))}
            </ScrollView>
            <TextInput
              style={styles.editInput}
              value={createForm.location}
              onChangeText={(v) => setCreateForm({ ...createForm, location: v })}
              placeholder="Location"
            />
            <TextInput
              style={styles.editInput}
              value={createForm.caption}
              onChangeText={(v) => setCreateForm({ ...createForm, caption: v })}
              placeholder="Caption"
              multiline
            />
            <View style={styles.editButtons}>
              <Pressable onPress={() => setShowCreateModal(false)}>
                <Text style={styles.menuItem}>Cancel</Text>
              </Pressable>
              <Pressable onPress={handleCreatePost}>
                <Text style={[styles.menuItem, { color: '#0095f6' }]}>Post</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showDeleteModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View style={styles.editBackdrop}>
          <View style={styles.editCard}>
            <Text style={styles.editTitle}>Delete Post</Text>
            <Text style={styles.deleteConfirmText}>Are you sure you want to delete this post?</Text>
            <View style={styles.editButtons}>
              <Pressable onPress={() => setShowDeleteModal(false)}>
                <Text style={styles.menuItem}>Cancel</Text>
              </Pressable>
              <Pressable onPress={confirmDeletePost}>
                <Text style={[styles.menuItem, { color: '#ed4956' }]}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: 55,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },

  logo: {
    fontSize: 29,
    fontWeight: 'bold',
    letterSpacing: -1.5,
    color: '#111',
    fontStyle: 'italic',
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 22,
  },

  headerIcon: {
    fontSize: 30,
    color: '#111',
  },

  stories: {
    paddingVertical: 14,
    paddingLeft: 10,
  },

  story: {
    alignItems: 'center',
    marginRight: 15,
    width: 68,
  },

  storyBorder: {
    width: 64,
    height: 64,
    borderRadius: 35,
    padding: 3,
    borderWidth: 2,
    borderColor: '#e1306c',
  },

  addStory: {
    width: 64,
    height: 64,
    borderRadius: 35,
    position: 'relative',
  },

  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },

  plus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0095f6',
    color: '#fff',
    width: 21,
    height: 21,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  storyName: {
    marginTop: 5,
    fontSize: 11,
    color: '#222',
  },

  divider: {
    height: 0.5,
    backgroundColor: '#ddd',
  },

  post: {
    marginBottom: 8,
  },

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 11,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 20,
  },

  userInfo: {
    marginLeft: 10,
    flex: 1,
  },

  username: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#111',
  },

  location: {
    fontSize: 11,
    color: '#555',
    marginTop: 2,
  },

  more: {
    fontSize: 19,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#111',
  },

  postImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    backgroundColor: '#eee',
  },

  postActions: {
    paddingHorizontal: 13,
    paddingVertical: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftActions: {
    flexDirection: 'row',
    gap: 17,
  },

  actionIcon: {
    fontSize: 27,
    color: '#111',
  },

  captionContainer: {
    paddingHorizontal: 13,
    paddingBottom: 13,
  },

  likes: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 5,
    color: '#111',
  },

  caption: {
    fontSize: 13,
    lineHeight: 19,
    color: '#111',
  },

  comments: {
    color: '#888',
    fontSize: 13,
    marginTop: 5,
  },

  time: {
    color: '#999',
    fontSize: 9,
    marginTop: 8,
  },

  postAdmin: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },

  adminButton: {
    color: '#0095f6',
    fontWeight: 'bold',
    fontSize: 13,
  },

  deleteButton: {
    color: '#ed4956',
    fontWeight: 'bold',
    fontSize: 13,
  },

  menuBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'flex-end',
    paddingTop: 110,
    paddingRight: 16,
  },

  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#ddd',
    paddingVertical: 4,
    minWidth: 90,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },

  editBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 24,
  },

  editCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },

  editTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 12,
  },

  editLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 8,
  },

  imagePicker: {
    marginBottom: 12,
    maxHeight: 90,
  },

  pickerImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },

  pickerImageSelected: {
    borderColor: '#0095f6',
  },

  editInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#111',
    marginBottom: 10,
  },

  deleteConfirmText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },

  editButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 24,
    marginTop: 4,
  },

  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    color: '#111',
  },

  menuDelete: {
    color: '#ed4956',
  },

  bottomNav: {
    height: 53,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingBottom: Platform.OS === 'android' ? 3 : 0,
  },

  navIcon: {
    fontSize: 29,
    color: '#111',
  },

  navAvatar: {
    width: 26,
    height: 26,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#111',
  },
});
