
import { router } from 'expo-router'
import { useState } from 'react'
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

const images = {
  myAvatar: require('../../../Image/post2_files/729737878_18054650219766285_7319868791941121770_n.jpg'),
  post1: require('../../../Image/Post1.jpg'),
  milbertPost: require('../../../Image/MilbertPost.jpg'),
  jeb: require('../../../Image/jeb.jpg'),
  jayr: require('../../../Image/Jayr.jpg'),
  jonathan: require('../../../Image/jonathan.jpg'),
  gabule: require('../../../Image/Gabule.jpg'),
  ireneo: require('../../../Image/ireneo.jpg'),
}

const posts = [
  images.post1,
  images.milbertPost,
  images.jeb,
  images.jonathan,
  images.gabule,
  images.ireneo,
]

export default function Profile() {
  const [name, setName] = useState('LordJeric P. Bernales')
  const [bio, setBio] = useState('🌐 🎯 💗')
  const [showEditModal, setShowEditModal] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [editName, setEditName] = useState(name)
  const [editBio, setEditBio] = useState(bio)

  const handleSaveProfile = () => {
    setName(editName)
    setBio(editBio)
    setShowEditModal(false)
  }

  const handleViewArchive = () => {
    Alert.alert('Archive', 'No archived posts yet.')
  }

  // Logout Function
  const handleLogout = () => {
    setShowLogoutModal(true)
  }

  const confirmLogout = () => {
    setShowLogoutModal(false)
    router.replace('/login')
  }

  return (
    <>
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0c1013" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Top Header */}
        <View style={styles.topBar}>
          <Text style={styles.username}>⌄  sir.berny  ⌄</Text>

          <View style={styles.topActions}>
            <Text style={styles.topIcon}>＋</Text>

            {/* Menu / Logout */}
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.topIcon}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Information */}
        <View style={styles.profileSection}>

          <View style={styles.profileTop}>

            {/* Profile Picture */}
            <View style={styles.avatarContainer}>
              <View style={styles.note}>
                <Text style={styles.noteText}>Note...</Text>
              </View>

              <Image
                source={images.myAvatar}
                style={styles.profileImage}
              />
            </View>

            {/* Profile Statistics */}
            <View style={styles.stats}>

              <View style={styles.stat}>
                <Text style={styles.statNumber}>13</Text>
                <Text style={styles.statLabel}>posts</Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statNumber}>345</Text>
                <Text style={styles.statLabel}>followers</Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statNumber}>558</Text>
                <Text style={styles.statLabel}>following</Text>
              </View>

            </View>
          </View>

          {/* Name and Bio */}
          <View style={styles.bio}>
            <Text style={styles.name}>
              {name}
            </Text>

            <Text style={styles.bioText}>{bio}</Text>

            <Text style={styles.bioText}>◎ sir.berny</Text>
          </View>

          {/* Profile Buttons */}
          <View style={styles.buttonRow}>

            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => {
                setEditName(name)
                setEditBio(bio)
                setShowEditModal(true)
              }}
            >
              <Text style={styles.buttonText}>Edit profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.profileButton} onPress={handleViewArchive}>
              <Text style={styles.buttonText}>View archive</Text>
            </TouchableOpacity>

          </View>

          {/* Teen Account Supervision */}
          <View style={styles.supervision}>
            <Text style={styles.supervisionTitle}>
              Teen Account supervision
            </Text>

            <Text style={styles.supervisionText}>
              _urmansai  ☺
            </Text>
          </View>

          {/* Story Highlights */}
          <View style={styles.highlights}>

            <View style={styles.highlightItem}>
              <Image
                source={images.milbertPost}
                style={styles.highlightImage}
              />

              <Text style={styles.highlightText}>
                ROTC Jour...
              </Text>
            </View>

            <View style={styles.highlightItem}>
              <View style={styles.addHighlight}>
                <Text style={styles.plus}>＋</Text>
              </View>

              <Text style={styles.highlightText}>New</Text>
            </View>

          </View>
        </View>

        {/* Profile Tabs */}
        <View style={styles.tabs}>
          <Text style={styles.activeTab}>▦</Text>
          <Text style={styles.tab}>▣</Text>
          <Text style={styles.tab}>⟳</Text>
          <Text style={styles.tab}>♙</Text>
        </View>

        {/* Photo Gallery */}
        <View style={styles.gallery}>
          {posts.map((post, index) => (
            <TouchableOpacity
              key={index}
              style={styles.postContainer}
            >
              <Image
                source={post}
                style={styles.postImage}
              />
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

  

    </View>

      <Modal
        visible={showEditModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowEditModal(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Edit profile</Text>
            <TextInput
              style={styles.modalInput}
              value={editName}
              onChangeText={setEditName}
              placeholder="Name"
            />
            <TextInput
              style={styles.modalInput}
              value={editBio}
              onChangeText={setEditBio}
              placeholder="Bio"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setShowEditModal(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSaveProfile}>
                <Text style={[styles.modalButtonText, { color: '#0095f6' }]}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showLogoutModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Logout</Text>
            <Text style={styles.logoutConfirmText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setShowLogoutModal(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={confirmLogout}>
                <Text style={[styles.modalButtonText, { color: '#ed4956' }]}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0c1013',
  },

  topBar: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  topActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  topIcon: {
    color: 'white',
    fontSize: 12,
  },

  profileSection: {
    paddingHorizontal: 8,
  },

  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarContainer: {
    width: '35%',
    alignItems: 'flex-start',
  },

  profileImage: {
    width: 74,
    height: 74,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#444',
  },

  note: {
    backgroundColor: '#292929',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 8,
    marginLeft: 22,
    marginBottom: -4,
    zIndex: 1,
  },

  noteText: {
    color: '#ddd',
    fontSize: 5,
  },

  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  stat: {
    alignItems: 'center',
  },

  statNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  statLabel: {
    color: 'white',
    fontSize: 12,
  },

  bio: {
    marginTop: 7,
  },

  name: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },

  bioText: {
    color: 'white',
    fontSize: 11,
    marginTop: 3,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
  },

  profileButton: {
    flex: 1,
    backgroundColor: '#292d32',
    height: 34,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },

  supervision: {
    backgroundColor: '#292d32',
    borderRadius: 7,
    padding: 10,
    marginTop: 8,
  },

  supervisionTitle: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },

  supervisionText: {
    color: '#ccc',
    fontSize: 10,
    marginTop: 3,
  },

  highlights: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 12,
    marginBottom: 12,
  },

  highlightItem: {
    alignItems: 'center',
  },

  highlightImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#444',
  },

  addHighlight: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plus: {
    color: '#888',
    fontSize: 34,
    fontWeight: '200',
  },

  highlightText: {
    color: '#aaa',
    fontSize: 9,
    marginTop: 4,
  },

  tabs: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#292929',
  },

  activeTab: {
    color: 'white',
    fontSize: 23,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingHorizontal: 10,
    paddingBottom: 5,
  },

  tab: {
    color: '#888',
    fontSize: 21,
  },

  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  postContainer: {
    width: '33.3333%',
    aspectRatio: 1,
    padding: 0.5,
  },

  postImage: {
    width: '100%',
    height: '100%',
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 24,
  },

  modalCard: {
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    padding: 20,
  },

  modalTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  modalInput: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },

  logoutConfirmText: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 16,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 24,
    marginTop: 4,
  },

  modalButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  bottomNav: {
    height: 52,
    backgroundColor: '#0c1013',
    borderTopWidth: 1,
    borderTopColor: '#292929',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navIcon: {
    color: 'white',
    fontSize: 24,
  },

  navProfile: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },

})
