import pygame
import random
import math

# Initialize the pygame
pygame.init()

# Create thr screen 
screen = pygame.display.set_mode((800, 600))
#  Background 
background = pygame.image.load('backgroundimage.jpg')

# Title and Icon
pygame.display.set_caption("Space Invaders")

icon = pygame.image.load('alien.png')
pygame.display.set_icon(icon)

# Player 
playerImg = pygame.image.load('spaceship.png')
playerX = 370
playerY = 480
playerX_change = 0


# Enemy
enemyImg = []
enemyX = []
enemyY = []
enemyX_change = []
enemyY_change = []

num_of_enemies = 6

for i in range(num_of_enemies):

    enemyImg.append(pygame.image.load('enemyship.png'))
    enemyX.append(random.randint(0,735))
    enemyY.append(random.randint(50,150))
    # This is enemy speed
    enemyX_change.append(3) 
    enemyY_change.append(40)

# Bullet
# Ready_state means you cant see bullet on the screen
# Fire - The bullent is currently mving
bulletImg = pygame.image.load('bullet.png')
bulletX = 0
bulletY = 480
bulletX_change = 0
bulletY_change = 6
bullet_state = "ready"

# score
score_value = 0
font = pygame.font.Font('freesansbold.ttf',32)

textX = 10
textY = 10

# Game over text 

over_font = pygame.font.Font('freesansbold.ttf',64)


def show_score(x,y):
    score = font.render("Score: " + str(score_value), True, (0,128,128))
    screen.blit(score,(x,y))
def game_over_text(x,y):
    over_text = over_font.render("GAME OVER", True, (0,128,128))
    screen.blit(over_text,(200,250))
def player(x,y):
    screen.blit(playerImg,(x,y))

def enemy(x,y,i):
    screen.blit(enemyImg[i],(x,y))

def fire_bullet(x,y):
    global bullet_state
    bullet_state = "fire"
    screen.blit(bulletImg,(x+16,y+10))

def isCollision(enemyX,enemyY,bulletX,bulletY):
    distance = math.sqrt((math.pow(enemyX - bulletX,2)) + (math.pow(enemyY - bulletY,2)))
    if distance <27:
        return True
    else:
        return False

# Game loop
running = True
while running:
    
    # RGB = Red Green Blue 
    screen.fill((0,128,128))
    # Background Image 
    screen.blit(background,(0,0))
    
    
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
        # if keystroke is pressed check weather it is right or left
        if event.type == pygame.KEYDOWN:
            # print("Keystroke is pressed")
            if event.key == pygame.K_LEFT:
                # print("Left arrow is pressed")
                playerX_change = -3
            
            if event.key == pygame.K_RIGHT:
                # print("Right arrow is pressed")
                playerX_change = 3
            if event.key == pygame.K_SPACE:
                if bullet_state is "ready":
                    # get the current x cordinate of spaceship
                    bulletX = playerX
                    fire_bullet(bulletX,bulletY)

        if event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                # print("Keystroke has been released")
                playerX_change = 0
    
    # Checking for  Boundries for spaceship
    playerX += playerX_change

    if playerX <= 0:
        playerX = 0
    elif playerX >= 736:
        playerX = 736
    
    # Enemy Movement
    for i in range(num_of_enemies):

        # game over
        if enemyY[i] > 400:
            for j in range(num_of_enemies):
                enemyY[j] = 2000
            game_over_text()
            break

        enemyX[i] += enemyX_change[i]

        if enemyX[i] <= 0:
            enemyX_change[i] = 1.5
            enemyY[i] += enemyY_change[i]
        elif enemyX[i] >= 736:
            enemyX_change[i] = -1.5
            enemyY[i] += enemyY_change[i]
            
    #  Collision
        collision = isCollision(enemyX[i],enemyY[i],bulletX,bulletY)
        if collision:
            bulletY = 480
            bullet_state = "ready"
            score_value += 1
            print(score_value)
            enemyX[i] = random.randint(0,735  )
            enemyY[i] = random.randint(50,150)
            
        
        enemy(enemyX[i], enemyY[i], i)

    
    # bullet Movement
    if bulletY <= 0:
        bulletY = 480
        bullet_state = "ready"

    if bullet_state is "fire":
        fire_bullet(bulletX,bulletY)
        bulletY -= bulletY_change
    
   

    
    
   
    
    
    player(playerX,playerY)
    show_score(textX,textY)
    pygame.display.update()

