Feature: As a user I want to create a project skill breakdown So that I can show which skills I used during that project

  User Story 1

  Scenario: User first arrives on the page
    Given a user on the home page
    Then the ".create-project-button" will be visible

  Scenario: User clicks create new project
    Given a user on the home page
    When they click ".create-project-button"
    Then the ".projects-list" will have one child element

  Scenario: User clicks add new skill
    Given a user on the home page
    Given an active project form
    When they click ".add-new-skill-button"
    Then the ".skills-list" will have one child element