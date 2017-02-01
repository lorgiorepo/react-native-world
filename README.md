# react-native-world
React Native World Examples
# React Native

# Estos pasos de instalacion asume que se usa Mac OSX

# Requerimientos
nvm install 4.0.0
brew install watchman
brew install flow
brew update && brew upgrade
xcode > 7.0
gradle

Instalando ambiente android
brew install android-sdk
export ANDROID_HOME=/usr/local/opt/android-sdk
Ejecutar Android SDK Manager con los siguientes items:
Android SDK Build-tools
Android 6.0

Instalando Genymotion
Pre requisitos:
Crear cuenta en Genymotion y descargar
VirtualBox

instalando react native command line
npm install -g react-native-cli

#Creando proyecto de React Native

1. Creando la estructura del proyecto
´
$ react-native init AwesomeProject
´

2. Para correr la aplicación en iOS: Ejecutar el siguiente comando.
´
$ react-native run-ios
´

3. Para correr la aplicación en Android, ejecutar el siguiente comando.
´
$ react-native run-android
´
Abre el archivo index.android.js