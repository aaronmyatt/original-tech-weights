Feature: As a user I want to create a project skill breakdown So that I can show which skills I used during that project

  User Story 1

  Scenario: User first arrives on the page
    Given a user on the home page
    Then the ".create_project_button" will be visible

  @ignore
  Scenario: User clicks create new project
    Given a user on the home page
    When they click ".create_project_button"
    Then the ".projects_list" will have one child element

  @ignore
  Scenario: User clicks add new skill
    Given a user on the home page
    Given an active project form
    When they click ".add_new_skill_button"
    Then the ".skills_list" will have one child element