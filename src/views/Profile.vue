<template>
  <div class="p-container" v-if="loginRegisterStore.currentUser?.email">
    <div class="profile-part">
      <div class="pp-card">
        <div class="ppc-header">
          <div class="ph-update">
            <button
              class="phub-button"
              @click="loginRegisterStore.toggleUpdateProfile"
            >
              <i class="fas fa-user-edit"></i>
            </button>
          </div>
          <div class="ph-image">
            <img
              src="/action-icons/user-icon.svg"
              alt=""
              class="ph-not-image"
              v-if="!loginRegisterStore.currentUser.profileImage"
            />
            <img
              :src="loginRegisterStore.currentUser.profileImage"
              alt=""
              class="ph-image"
              v-else
            />
          </div>
          <div class="ph-username">
            {{ loginRegisterStore.currentUser.username }}
          </div>
        </div>
        <div class="ppc-body">
          <div class="pb-username">
            <p>Username:</p>
            <span>{{ loginRegisterStore.currentUser.username }}</span>
          </div>
          <div class="pb-email">
            <p>Email:</p>
            <span>{{ loginRegisterStore.currentUser.email }}</span>
          </div>
          <div class="pb-phone">
            <p>Phone:</p>
            <span>{{ loginRegisterStore.currentUser.phone }}</span>
          </div>
          <div class="pb-password">
            <p>Password:</p>
            <p>
              <span
                v-for="i in loginRegisterStore.currentUser.password.length"
                :key="i"
                >{{ "*" }}</span
              >
            </p>
          </div>
        </div>
      </div>
      <ProfileActions />
    </div>
    <TopList />
  </div>
</template>
<script setup>
import ProfileActions from "@/components/profile/ProfileActions.vue";
import { useLoginRegisterStore } from "@/store/modules/loginRegister";
import TopList from "@/components/ui/TopList.vue";

const loginRegisterStore = useLoginRegisterStore();
</script>
<style lang="scss">
.p-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 100px clamp(10px, 1vw, 20px) 0;
  .profile-part {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: clamp(20px, 10vw, 40px) 0;
    .pp-card {
      background-color: rgba(255, 255, 255, 0.65);
      width: 100%;
      padding: 20px;
      border-radius: 10px;
      .ppc-header {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        gap: 10px;
        .ph-update {
          position: absolute;
          top: 0;
          right: 0;
          .phub-button {
            background-color: rgba(0, 0, 0, 0.1);
            border: none;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            &:hover {
              background-color: rgba(0, 180, 0, 0.1);
            }
          }
        }
        .ph-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .ph-not-image {
            width: 80%;
            height: 80%;
            object-fit: cover;
          }
        }
        .ph-username {
          font-size: 24px;
          font-weight: 700;
        }
      }
      .ppc-body {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-weight: 700;
        .pb-username,
        .pb-email,
        .pb-phone,
        .pb-password {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.1);
          padding: 10px;
          border-radius: 10px;
          color: rgb(100, 100, 100);
          span {
            color: rgb(0, 0, 0);
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .profile-part {
      grid-template-columns: 400px 1fr;
      .pp-card {
        padding: 30px;
      }
    }
  }
}
@media (min-width: 1024px) {
  .p-container {
    padding: 120px clamp(10px, 1vw, 20px) 0;
  }
}
</style>