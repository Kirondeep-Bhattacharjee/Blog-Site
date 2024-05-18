import React, { useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/AuthContext";
import { API } from "../constant";
import { getToken } from "../helpers";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Form, Input, message, Row, Spin } from "antd";

const ProfileCard = styled(Card)`
  &.profile_page_card {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
`;

const StyledForm = styled(Form)`
  .ant-row {
    margin-bottom: 16px;
  }
`;

const StyledButton = styled(Button)`
  &.profile_save_btn {
    width: 100%;
    margin-top: 16px;
  }
`;

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProfileUpdate = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      setUser(responseData);
      message.success("Data saved successfully!");
      
      // Redirect to home page after successful update
      navigate('/', { replace: true });
      window.location.reload();
    } catch (error) {
      console.error(Error);
      message.error("Error While Updating the Profile!");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <ProfileCard title="Profile" className="profile_page_card">
      <StyledForm
        layout="vertical"
        initialValues={{
          username: user?.username,
          email: user?.email,
          instagram_username: user?.instagram_username,
          avatar_url: user?.avatar_url,
          website_url: user?.website_url,
          about: user?.about,
        }}
        onFinish={handleProfileUpdate}
      >
        <Row gutter={[16, 16]}>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Username is required!",
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Avatar Url"
              name="avatar_url"
              rules={[
                {
                  type: "url",
                },
              ]}
            >
              <Input placeholder="Avatar Url" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="About"
              name="about"
              rules={[
                {
                  required: true,
                  type: "string",
                  max: 120,
                },
              ]}
            >
              <Input.TextArea placeholder="About" rows={6} />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Instagram Username"
              name="instagram_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Instagram Username" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Website Url"
              name="website_url"
              rules={[
                {
                  type: "url",
                },
              ]}
            >
              <Input placeholder="Website Url" />
            </Form.Item>
          </Col>
        </Row>
        <StyledButton
          htmlType="submit"
          type="primary"
          size="large"
          className="profile_save_btn"
        >
          {loading ? <Spin size="small" /> : "Save"}
        </StyledButton>
      </StyledForm>
    </ProfileCard>
  );
};

export default Profile;
